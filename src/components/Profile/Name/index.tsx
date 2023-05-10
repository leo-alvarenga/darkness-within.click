import { useMemo } from "react";

function Name() {
  const content = useMemo(
    () => (
      Array
      .from('darkness_within')
      .map((s, index) => (
          <span
            style={{
              animationDelay: `calc(200ms * ${index + 1})`,
            }}
            className={
              'relative inline-block animate-fliping'
            }
          >
            {s}
          </span>
        )
      )
    )
  , []);

  return (
    <h1 className="relative text-4xl uppercase max-md:text-lg">
      {content.map((c) => c)}
    </h1>
  );
}

export default Name;