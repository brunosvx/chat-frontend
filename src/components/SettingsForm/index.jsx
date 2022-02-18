
function SettingsForm() {

    return (
      <form id="settings">
          <div className="setting name">
            <h2>Alterar Nome</h2>
            <input type="text" placeholder="Digite o Nome" />
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
      </form>
      )
  }
  
export default SettingsForm
  