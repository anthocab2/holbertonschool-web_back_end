export default function getFullBudgetForCurrentYear(income, gdp, capita) {
  return {
    income,
    gdp,
    capita,
    getIncomeInDollars: (income) => `$${income}`,
    getIncomeInEuros: (income) => `${income} euros`,
  };
}
