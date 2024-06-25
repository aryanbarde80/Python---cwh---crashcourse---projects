/** @type {import('tailwindcss').Config} */
module.exports = {
  /*content: ["./dist/index.html"],*/ /* The inside statement is written firstly to see changes, bcoz export is needed*/
  content: ["./dist/*.html"], /*this asterisk will now manage all the html files and generate necessary css for it*/ 
  theme: {
    extend: {},
  },
  plugins: [],
}

