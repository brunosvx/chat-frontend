import { useRef } from 'react';

function SettingsForm() {

  const inputNameRef = useRef(null);

  const username = localStorage.getItem('username');

  function handleFormSubmit(event) {
    event.preventDefault();

    const name = inputNameRef.current?.value.trim();

    if(name.length <= 0 || name.length > 20) return alert('Nome deve ter entre 1 e 20 caracteres');

    localStorage.setItem('username', name);
    alert('Configurações salvas')
  }

    return (
      <form id="settings" onSubmit={handleFormSubmit}>
          <div className="setting name">
            <h2>Alterar Nome</h2>
            <input type="text" placeholder="Digite o Nome" ref={inputNameRef} defaultValue={username} />
          </div>
          <div className="setting notifications">
            <h2>Sons de Notificações</h2>
            <div className="options">
                <div className="option">
                    <input type="radio" name="notification-settings" id="enable" value="enable" />
                    <label htmlFor="enable">Enable</label>
                </div>
                <div className="option">
                    <input type="radio" name="notification-settings" id="disable" value="disable" />
                    <label htmlFor="disable">Disable</label>
                </div>
            </div>
          </div>
          <button>Salvar</button>
      </form>
      )
  }
  
export default SettingsForm
  