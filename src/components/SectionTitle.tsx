type Props = {
  title: string;
};

const SectionTitle = ({ title }: Props) => {
  return <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>;
};

export default SectionTitle;
