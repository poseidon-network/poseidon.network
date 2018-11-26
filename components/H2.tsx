const H2 = ({
  children,
  center,
  color = '#fff',
  id = '',
}: { children: React.ReactNode, center?: boolean, color?: string, id?: string; }) => ((
  <h2 id={id}>
    { children }

    <style jsx>{`
      h2 {
        font-size: 24px;
        color: ${ color };
        ${ center && 'text-align: center;' }
      }
    `}</style>
  </h2>
));

export default H2;
