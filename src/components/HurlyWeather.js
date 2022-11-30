import React from "react";
import'./HurlyWeather.css'

class HurlyWeather extends React.Component{    
    render(){
        let hourly = this.props?.api?.hourly?.map((item) => {
            const options = { weekday: "short", month: "short", day: "numeric" };
            let hour = new Date(item.dt * 1000).getHours();
            let day = new Date(item.dt * 1000).toLocaleDateString("ru-Ru", options);
            let temp = Math.round(item.temp);
            let img = (
              <img
                src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                alt={item.weather[0].description}
              />
            );
            return{
                hour,
                day,
                temp:temp,
                img:img
            }
            
          });

          let sevenDays = this.props?.api?.daily?.map((item) => {
            const options = { weekday: "short", month: "short", day: "numeric" };
            let day = new Date(item.dt * 1000).toLocaleDateString("ru-Ru", options);
            let temp_min = Math.round(item.temp.min);
            let temp_max = Math.round(item.temp.max);
            let img = (
              <img
                src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                alt={item.weather[0].description}
              />
            );
            return{
                day,
                temp_min,
                temp_max,
                img

            }
            
          });
          console.log(this.props.exclude)
        return(
            <div className="wether">
                {this.props.exclude === "hourly" &&
                    
                <div>
                <div className="wether__aut">Погода на ближайшие 48 часов:</div>
                <div className="wether__hourly">
                    {hourly?.map((item)=>
                    <div className="wether__hourlycol">
                      <div className="wether__information">
                        <div className="wether__information--date">
                            {item.day}
                        </div>
                        <div className="wether__information--hour">
                          {item.hour}:00
                        </div>
                        <div className="wether__information--img">
                          {item.img}
                        </div>
                        
                        <div className="wether__information--temp">
                          {item.temp}&deg;C
                        </div>                       
                      </div>
                    </div>
                    )}
                </div>
                </div>
    }
                    
                
                {this.props.exclude === "daily" &&
                    
                  <div>
                    <div className="wether__aut"> Погода на ближайшие 7 дней:</div>
                    <div className="wether__hourly">
                        {sevenDays?.map((item)=>
                        <div className="wether__dailycol">
                          <div className="wether__dailyinformation">
                        
                            <div className="wether__information--date">
                              {item.day}
                            </div>
                            <div className="wether__information--dailytemp">
                            {item.temp_max}<sup>&deg;C</sup> / {item.temp_min}<sup>&deg;C</sup>
                            </div>
                            <div className="wether__information--img">
                            &nbsp;&nbsp;<span>{item.img}</span>
                            </div>
                          </div>
                        </div>
                            
                        
                        )}
                        </div>
                      </div>
                }
                
                
            </div>
            
        )
    }
}


export default HurlyWeather