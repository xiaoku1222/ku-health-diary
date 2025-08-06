document.getElementById('entry-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const weight = document.getElementById('weight').value;
  const breakfast = document.getElementById('breakfast').value;
  const lunch = document.getElementById('lunch').value;
  const dinner = document.getElementById('dinner').value;
  const snacks = document.getElementById('snacks').value;
  const exercise = document.getElementById('exercise').value;
  const notes = document.getElementById('notes').value;

  const today = new Date().toLocaleDateString('zh-TW');

  const entry = {
    date: today,
    weight,
    breakfast,
    lunch,
    dinner,
    snacks,
    exercise,
    notes
  };

  localStorage.setItem(`health_diary_${today}`, JSON.stringify(entry));
  document.getElementById('result').textContent = '✅ 今日記錄已儲存！';
});
