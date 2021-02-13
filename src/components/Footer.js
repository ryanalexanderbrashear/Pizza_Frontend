function Footer() {
  const styles = {
    footerStyles: {
      paddingLeft: '5px',
      background: '#5095E0',
      color: 'white',
      flexShrink: 0
    }
  };
  return (
    <div style={styles.footerStyles}>
      <h1>@2021 Alex Brashear</h1>
    </div>
  );
}

export default Footer;