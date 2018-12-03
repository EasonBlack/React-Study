export default ({ body, title, initialState }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <script>window.__APP_INITIAL_STATE__ = ${initialState}</script>
        <title>${title}</title>
      </head>
      
      <body>
        <div id="root">${body}</div>
        <script type="text/javascript" src=".././bundle.js" charset="utf-8"></script>
      </body>
    </html>
  `;
};
