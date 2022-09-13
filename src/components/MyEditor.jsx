import React from "react";
import { Editor, EditorTools } from "@progress/kendo-react-editor";

const MyEditor = () => {
  return (
    <div>
      <Editor
        tools={[[EditorTools.Bold, EditorTools.Italic, EditorTools.Underline]]}
        contentStyle={{
          height: 320,
        }}
      />
    </div>
  );
};

export default MyEditor;
