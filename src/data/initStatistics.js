export const initStatistics = (todos, categories) => {
  const statistics = [...categories];
  statistics.forEach(cat => {
    cat.total = 0;
    cat.active = 0;
    todos.forEach(todo => {
      if (cat.id === todo.categoryId) {
        cat.total += 1;
        if (todo.active) cat.active += 1;
      }
    })
  })

  return statistics;
}
