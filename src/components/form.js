import React from "react";



class Form extends React.Component{
    
    render(){
        return (
            <form onSubmit= {this.props.wetherMetod} className="form" >
              <div className="form-block">
              <div className="select">
                <select className="select_exclude" name="exclude" >
                  <option disabled>Выбирете позицыю</option>
                  <option value="current">Текущая</option>
                  <option value="daily">На 7 дней</option>
                  <option value="hourly">Ближайшие два дня </option>
                </select>

                <select className="select_city" name="city" >
                  <option disabled>Выберете город</option>
                  <option value="London" >Лондон</option>
                  <option value="Moscow">Москва</option>
                  <option value="Kiev">Киев</option>
                  <option value="Warshawa">Варшава</option>
                </select>
              </div>

              <div className="button">
                <button className="btn"> Показать погоду </button>
              </div>
              </div>
                
            </form>
        );
    }
}

export default Form