//#endregion
//#region workspaces/nextrap-monorepo/nextrap-base/style-reset/src/index.ts
var resetStyle = "/* General Purpose SCSS Reset */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nhtml,\nbody {\n  height: 100%;\n  width: 100%;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n  color: inherit;\n  background: none;\n  border: none;\n  outline: none;\n}\n\na,\ni {\n  color: inherit;\n  text-decoration: none;\n}\n\nul,\nol {\n  list-style: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\nslot {\n  display: contents; /* Allows slotted elements to inherit styles from parent */\n}";
//#endregion
export { resetStyle as t };
