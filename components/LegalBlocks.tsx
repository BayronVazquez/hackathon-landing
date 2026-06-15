import type { LegalBlock } from "@/lib/dictionaries";

function renderParagraph(text: string) {
  return <p>{text}</p>;
}

export function LegalBlocks({ blocks }: { blocks: LegalBlock[] }) {
  return (
    <>
      {blocks.map((block, index) => {
        if (block.type === "paragraph") {
          return <div key={`p-${index}`}>{renderParagraph(block.text)}</div>;
        }

        return (
          <ul key={`ul-${index}`} className="list-disc space-y-2 pl-6">
            {block.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        );
      })}
    </>
  );
}
