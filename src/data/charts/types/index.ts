type ColorThemes = {
  [key: string]: string;
};

type Dataset = {
  label: string;
  backgroundColor: string | string[];
  borderColor: string;
  data: number[];
}

type GeneratedData = {
  labels: string[];
  datasets: Dataset[];
}
