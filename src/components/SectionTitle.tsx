type Props = {
  title: string;
  label?: string;
};

const SectionTitle = ({ title, label }: Props) => {
  return (
    <div>
      {label && (
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-400 mb-3">
          {label}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
        {title}
      </h2>
      <div className="mt-4 w-12 h-1 bg-blue-600 rounded-full" />
    </div>
  );
};

export default SectionTitle;
