export default function json2html(data) {
  const columns = ['Name', 'Age', 'Gender'];

  let html = '<table data-user="bandijayanth06@gmail.com">';

  html += '<thead><tr>';
  columns.forEach(column => {
    html += `<th>${column}</th>`;
  });
  html += '</tr></thead>';

  html += '<tbody>';
  data.forEach(row => {
    html += '<tr>';
    columns.forEach(column => {
      html += `<td>${row[column] !== undefined ? row[column] : ''}</td>`;
    });
    html += '</tr>';
  });
  html += '</tbody>';
  html += '</table>';

  return html;
}
