
document.getElementById("inventory-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const data = {
    time: new Date().toLocaleString(),
    nhanvien: form.nhanvien.value,
    nuoc: form.nuoc.value,
    nhapkho: form.nhapkho.value,
    tonkho: form.tonkho.value
  };

  fetch("https://script.google.com/macros/s/AKfycbzdmBakNypA8wMUtvazF6D_cu0N9c9l3KQqRkeIf65msHo3-TCt8RWhSL1rY7wBZnlc/exec", {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  document.getElementById("status").textContent = "Đã gửi dữ liệu!";
  form.reset();
});
