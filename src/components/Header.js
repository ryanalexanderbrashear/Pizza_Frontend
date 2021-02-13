function Header() {
  const styles = {
    headerStyles: {
      padding: '30px',
      textAlign: 'center',
      background: '#5095E0',
      color: 'white',
      fontSize: '30px'
    }
  };
  return (
    <div style={styles.headerStyles}>
      <h1>Pizza Info Center</h1>
    </div>
  );
}

export default Header;