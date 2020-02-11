const fetchHtml = async url => {
  try {
    const res = await fetch(url);
    const html = await res.text();
    return html;
  } catch (error) {
    console.log('TCL: error', error);
    return false;
  }
};
export default fetchHtml;
