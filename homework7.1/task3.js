function divide(numerator, denominator) {
  if (typeof numerator !== 'number' || typeof denominator !== 'number') {
    throw new Error("Обидва аргументи мають бути числами");
  }

  if (denominator === 0) {
    throw new Error("Ділення на нуль неможливе");
  }

  return numerator / denominator;
}

// ✅ Валідний приклад
try {
  const result = divide(10, 2);
  console.log("Результат:", result);
} catch (error) {
  console.error("Помилка:", error.message);
} finally {
  console.log("Робота завершена");
}

try {
  const result = divide(10, 0);
  console.log("Результат:", result);
} catch (error) {
  console.error("Помилка:", error.message);
} finally {
  console.log("Робота завершена");
}

try {
  const result = divide("abc", 5);
  console.log("Результат:", result);
} catch (error) {
  console.error("Помилка:", error.message);
} finally {
  console.log("Робота завершена");
}

try {
  const result = divide(8, "zero");
  console.log("Результат:", result);
} catch (error) {
  console.error("Помилка:", error.message);
} finally {
  console.log("Робота завершена");
}
