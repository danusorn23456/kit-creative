import React, { useEffect, useState } from "react";
import { ChangeEvent } from "react";
import { ColorPicker } from "~/components";
import { useCssVariable } from "~/hooks";
import { MainLayout } from "~/layout";
import { adjustHexLightness } from "~/utils";
import { defaultThemePalette } from "./default";
import { CodeBlock } from "coze-block";

export interface CSSGeneratorPageProps {}
export type CSSType = "sass" | "css";

function CSSGeneratorPage({}: CSSGeneratorPageProps) {
  const { cssVar, rawCssVar, setProperty } =
    useCssVariable(defaultThemePalette);
  const [cssType, setCssType] = useState("css");

  const [codeTexts, setCodeTexts] = useState("");

  function handleColorChange(role: string, e: ChangeEvent) {
    const inputNode = e.target as HTMLInputElement;
    const hex = inputNode.value;

    const lighter = adjustHexLightness(hex, 0.2);
    const light = adjustHexLightness(hex, 0.1);
    const base = adjustHexLightness(hex, 0);
    const dark = adjustHexLightness(hex, -0.1);
    const darker = adjustHexLightness(hex, -0.2);

    setProperty(role, {
      darker,
      dark,
      base,
      light,
      lighter,
    });
  }

  function handleCopy() {
    navigator.clipboard.writeText(codeTexts.replace(/"/g, ""));
  }

  useEffect(() => {
    const cssTexts = `:root${JSON.stringify(rawCssVar, null, 2).replace(
      /,/g,
      ";"
    )}`;
    switch (cssType) {
      case "css":
        return setCodeTexts(cssTexts);
      case "sass":
        return setCodeTexts(cssTexts.replace(/--/g, "$"));
      default:
        break;
    }
  }, [rawCssVar, cssType]);

  return (
    <MainLayout>
      <main className="container max-w-6xl mx-auto h-full relative px-4 flex flex-col space-y-16 py-16">
        <div className="flex flex-col space-y-6">
          <div>
            <h2 className="mb-2 text-2xl md:text-4xl text-white uppercase font-bold">
              get some <span className="text-orange-600">css</span> variable
            </h2>
            <p className="text-sm md:text-md text-white w-80 sm:w-96">
              Speed up your design process with our time-saving CSS variable
              generator. Quickly generate a palette of custom colors to bring
              your any project to life.
            </p>
          </div>
          <p className="text-white flex space-x-2">
            <span>support</span>
            <span>:</span>
            <span className="px-1 bg-white rounded-sm text-black">css</span>
            <span className="px-1 bg-white rounded-sm text-black">scss</span>
          </p>
        </div>
        <div className="flex flex-col space-y-4 pt-4">
          <ColorPicker
            name="primary"
            value={cssVar.primary}
            onChange={handleColorChange}
          />
          <ColorPicker
            name="secondary"
            value={cssVar.secondary}
            onChange={handleColorChange}
          />
          <ColorPicker
            name="background"
            value={cssVar.background}
            onChange={handleColorChange}
          />
          <ColorPicker
            name="surface"
            value={cssVar.surface}
            onChange={handleColorChange}
          />
          <ColorPicker
            name="info"
            value={cssVar.info}
            onChange={handleColorChange}
          />
          <ColorPicker
            name="notice"
            value={cssVar.notice}
            onChange={handleColorChange}
          />
          <ColorPicker
            name="positive"
            value={cssVar.positive}
            onChange={handleColorChange}
          />
          <ColorPicker
            name="negative"
            value={cssVar.negative}
            onChange={handleColorChange}
          />
        </div>
        <div className="flex flex-col">
          <div className="flex">
            <label className="rounded-tl-lg bg-gray-900 border border-gray-700 border-b-0 cursor-pointer flex relative">
              <input
                name="css"
                type="radio"
                defaultChecked={true}
                onClick={() => setCssType("css")}
                className="peer opacity-0 absolute text-white text-xs uppercase text-center"
              />
              <div className="text-white opacity-50 peer-checked:opacity-100 p-2">
                .css
              </div>
            </label>
            <label className="bg-gray-900 border border-gray-700 border-b-0 cursor-pointer flex relative">
              <input
                name="css"
                type="radio"
                onClick={() => setCssType("sass")}
                className="peer opacity-0 absolute text-white text-xs uppercase text-center"
              />
              <div className="text-white opacity-50 peer-checked:opacity-100 p-2">
                .sass
              </div>
            </label>
            <div className="w-full border-t border-r border-gray-700 rounded-tr-lg flex justify-end items-center px-3">
              <button
                className="text-white border px-3 py-1 text-sm px-2 uppercase rounded active:scale-110 active:bg-white active:text-black"
                onClick={handleCopy}
              >
                copy
              </button>
            </div>
          </div>
          {/* still thinking about reuse code block component */}
          <CodeBlock code={codeTexts} type="css" />
        </div>
      </main>
    </MainLayout>
  );
}

export { CSSGeneratorPage };
