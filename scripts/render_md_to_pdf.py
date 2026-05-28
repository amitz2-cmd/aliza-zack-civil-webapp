from __future__ import annotations

import re
from dataclasses import dataclass
from pathlib import Path

from reportlab.lib.pagesizes import LETTER
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer


@dataclass(frozen=True)
class Args:
    input_md: Path
    output_pdf: Path


def _escape_html(text: str) -> str:
    return (
        text.replace("&", "&amp;")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
        .replace('"', "&quot;")
    )


def _inline_code_to_html(s: str) -> str:
    # Convert `code` to a monospace span; keep it simple and safe.
    parts: list[str] = []
    in_code = False
    buf: list[str] = []
    for ch in s:
        if ch == "`":
            if in_code:
                code = _escape_html("".join(buf))
                parts.append(f"<font face='Courier'>{code}</font>")
                buf = []
                in_code = False
            else:
                parts.append(_escape_html("".join(buf)))
                buf = []
                in_code = True
        else:
            buf.append(ch)
    parts.append(_escape_html("".join(buf)))
    return "".join(parts)


def _md_lines_to_flowables(md: str) -> list:
    styles = getSampleStyleSheet()
    normal = ParagraphStyle(
        "AZ_Normal",
        parent=styles["BodyText"],
        fontName="Helvetica",
        fontSize=11,
        leading=14,
        spaceAfter=6,
    )
    h1 = ParagraphStyle(
        "AZ_H1",
        parent=styles["Heading1"],
        fontName="Helvetica-Bold",
        fontSize=18,
        leading=22,
        spaceAfter=10,
    )
    h2 = ParagraphStyle(
        "AZ_H2",
        parent=styles["Heading2"],
        fontName="Helvetica-Bold",
        fontSize=14,
        leading=18,
        spaceBefore=8,
        spaceAfter=6,
    )
    h3 = ParagraphStyle(
        "AZ_H3",
        parent=styles["Heading3"],
        fontName="Helvetica-Bold",
        fontSize=12,
        leading=16,
        spaceBefore=6,
        spaceAfter=4,
    )
    bullet = ParagraphStyle(
        "AZ_Bullet",
        parent=normal,
        leftIndent=16,
        bulletIndent=6,
        spaceAfter=3,
    )

    flow: list = []
    for raw_line in md.splitlines():
        line = raw_line.rstrip()
        if not line.strip():
            flow.append(Spacer(1, 6))
            continue

        if line.startswith("# "):
            flow.append(Paragraph(_escape_html(line[2:].strip()), h1))
            continue
        if line.startswith("## "):
            flow.append(Paragraph(_escape_html(line[3:].strip()), h2))
            continue
        if line.startswith("### "):
            flow.append(Paragraph(_escape_html(line[4:].strip()), h3))
            continue

        m = re.match(r"^\s*-\s+(.*)$", line)
        if m:
            content = _inline_code_to_html(m.group(1).strip())
            flow.append(Paragraph(content, bullet, bulletText="•"))
            continue

        flow.append(Paragraph(_inline_code_to_html(line.strip()), normal))

    return flow


def render_pdf(args: Args) -> None:
    md = args.input_md.read_text(encoding="utf-8")

    args.output_pdf.parent.mkdir(parents=True, exist_ok=True)
    doc = SimpleDocTemplate(
        str(args.output_pdf),
        pagesize=LETTER,
        leftMargin=0.85 * inch,
        rightMargin=0.85 * inch,
        topMargin=0.75 * inch,
        bottomMargin=0.75 * inch,
        title=args.input_md.stem,
        author="Cursor Agent",
    )

    story = _md_lines_to_flowables(md)
    doc.build(story)


def main() -> int:
    import argparse

    p = argparse.ArgumentParser(description="Render a simple markdown file to PDF.")
    p.add_argument("--in", dest="input_md", required=True, help="Input markdown path")
    p.add_argument("--out", dest="output_pdf", required=True, help="Output PDF path")
    ns = p.parse_args()

    render_pdf(Args(input_md=Path(ns.input_md), output_pdf=Path(ns.output_pdf)))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

