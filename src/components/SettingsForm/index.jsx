import { useRef } from 'react';

function SettingsForm() {

  const inputNameRef = useRef(null);
  const inputRadioRef = useRef(null);

  const username = localStorage.getItem('username');
  const currentEnableNotifications = JSON.parse(localStorage.getItem('settings'))?.enableNotifications;
  
  function handleFormSubmit(event) {
    event.preventDefault();

    const name = inputNameRef.current?.value.trim();
    const enableNotifications = inputRadioRef.current?.checked;

    if(name.length <= 0 || name.length > 20) return alert('Nome deve ter entre 1 e 20 caracteres');

    localStorage.setItem('username', name);
    localStorage.setItem('settings', JSON.stringify({ enableNotifications }));
    alert('Configurações salvas');
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

                    <input type="radio" name="notification-settings" id="enable" value="enable"
                    defaultChecked={currentEnableNotifications || currentEnableNotifications === undefined} ref={inputRadioRef} />

                    <label htmlFor="enable">Habilitado</label>
                </div>
                <div className="option">

                    <input type="radio" name="notification-settings" id="disable" value="disable"
                    defaultChecked={currentEnableNotifications === false} />
                    
                    <label htmlFor="disable">Desabilitado</label>
                </div>
            </div>
          </div>
          <button>Salvar</button>
      </form>
      )
  }
  
export default SettingsForm
  