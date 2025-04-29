//Vytvořte pro zobrazení heslo komponentu StrongPassword, která bude mít dvě props s názvem password a length. 
//Tuto komponentu pak použijte ve funkci render.

export const StrongPassword = (props) => {
  return (
    <p>
      Vaše heslo je: {props.password}, délka: {props.length}
    </p>
  );
};
