export const parseObjectJsx = (block) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(block, null, 3).replace(
          /\n( *)/g,
          function (match, p1) {
            return "<br>" + "&nbsp;".repeat(p1.length);
          }
        ),
      }}
    />
  );
};
