import { useEffect, useRef, useState } from "react";

function useCssVariable(initial: Record<string, any>): {
  cssVar: typeof initial;
  rawCssVar: Record<string, string>;
  setProperty: (key: string, value: any) => void;
} {
  const rootNode = useRef<HTMLElement>(document.querySelector(":root"));
  const [cssVar, setCssVar] = useState<typeof initial>(initial);
  const [rawCssVar, setRawCssVar] = useState<Record<string, string>>({});

  function setDocumentPropertyRecursive(
    object: Record<string, any>,
    prevParent?: string
  ) {
    prevParent = prevParent || "-";
    for (const key in object) {
      let currentParent = prevParent + "-" + key;
      if (typeof object[key] === "object") {
        setDocumentPropertyRecursive(object[key], currentParent);
      } else {
        if (rootNode.current) {
          rootNode.current.style.setProperty(
            currentParent,
            object[key] || "unset"
          );
        }
      }
    }
  }

  function updateRawCss() {
    if (!rootNode.current) {
      return console.error("node not found");
    }
    let updateRawCssVar: Record<string, string> = {};
    Object.entries(rootNode.current.style)
      .map(([, name]) => {
        return name;
      })
      .filter((name) => name.startsWith("--"))
      .forEach(
        (name) =>
          (updateRawCssVar[name] = getComputedStyle(
            rootNode.current as HTMLElement
          ).getPropertyValue(name))
      );

    setRawCssVar(updateRawCssVar);
  }

  function setProperty(key: string, value: any) {
    if (!rootNode.current) {
      return console.error("node not found");
    }

    setDocumentPropertyRecursive({
      ...cssVar,
      [key]: value,
    });

    setCssVar((prev) => ({
      ...prev,
      [key]: value,
    }));

    updateRawCss();
  }

  useEffect(
    function initialDocumentRootVariable() {
      if (rootNode.current) {
        setDocumentPropertyRecursive(initial);
        updateRawCss();
      }
    },
    [initial]
  );

  return { cssVar, rawCssVar, setProperty };
}

export { useCssVariable };
