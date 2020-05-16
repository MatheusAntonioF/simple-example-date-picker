import { subMonths, addMonths } from 'date-fns';

const data = [
  {
    date: subMonths(new Date(), 1),
    label: "Mês anterior -2",
  },
  {
    date: subMonths(new Date(), 2),
    label: "Mês anterior -1",
  },
  {
    date: new Date(),
    label: "Mês atual",
  },
  {
    date: addMonths(new Date(), 1),
    label: "Próximo Mês +1",
  },
  {
    date: addMonths(new Date(), 2),
    label: "Próximo Mês +2",
  }
];

export default data;