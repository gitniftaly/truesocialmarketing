import clsx from "clsx";

const Container = ({ className, ...props }) => {
  return (
    <div
      className={clsx(
        "max-w-7xl mx-auto px-1 sm:px-4 lg:px-8 overflow-y-auto",
        className
      )}
      {...props}
    />
  );
};

export default Container;
