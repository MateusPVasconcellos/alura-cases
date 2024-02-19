export default function Title({children, as}) {
  return (
    <>
      <h1>{children}</h1>
      <style jsx>
        {`
          ${as} {
            color: black
          }
        `}
      </style>
    </>
  );
}
