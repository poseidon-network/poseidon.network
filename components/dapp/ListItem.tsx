const ListItem = ({ children }: { children: React.ReactNode }) => (
  <li>
    { children }
    <style jsx>{`
      li {
        padding-left: 22px;
        text-indent: -25px;
      }

      li::before {
        content: '• ';
        width: 6px;
        height: 6px;
        color: #90cfbe;
        margin-right: 13px;
      }
    `}</style>
  </li>
);

export default ListItem;
