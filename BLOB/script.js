const a1 = document.getElementById("downloadBtn");
const blob1 = new Blob(["Hello ", "i ", "am ", "downloaded "], {
  type: "text/plain",
});
a1.href = URL.createObjectURL(blob1);

//data
const data = [
  ["ID", "Name", "Age", "City"],
  [1, "John Doe", 28, "New York"],
  [2, "Jane Smith", 34, "Los Angeles"],
  [3, "Alice Johnson", 25, "Chicago"],
  [4, "Bob Williams", 40, "Houston"],
];

//to csv format
function makeCSV(rows) {
  return rows.map((r) => r.join(",")).join("\n");
}

const csv = document.getElementById("csv");
const blob2 = new Blob([makeCSV(data)]);
csv.href = URL.createObjectURL(blob2);

