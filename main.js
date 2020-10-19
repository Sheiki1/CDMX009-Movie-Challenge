// Use fetch() to make the request to the API
/*fetch("http://www.omdbapi.com/?t=harry+potter&apikey=f9a010aa").then(function(result) {
  return result.json();
}).then(function(json) {
  displayResults(json);
});
  console.log(fetch())*/
  async function getISS(){
    const api_url= "http://www.omdbapi.com/?t=harry+potter&apikey=f9a010aa"
    const response= await fetch(api_url);
    const data = await response.json();
    console.log(data.Title);
    return data.Title
  }
    
  //Promise.resolve(getISS())
  
  
  console.log(Promise.resolve(getISS()))
 // Get the modal
let modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


function myFunction() {
  let felizP = document.getElementById("felizP");
  
  let triste1 = document.getElementById("triste1");
  
  let enojado1 = document.getElementById("enojado1");
  
  let aburrido1 = document.getElementById("aburrido1");
  
  let asustado1 = document.getElementById("asustado1");
  

  let concierto1 = document.getElementById("concierto1");
  
  let cama1 = document.getElementById("cama1");
  
  let ejercicio1 = document.getElementById("ejercicio1");
  
  let fiesta1 = document.getElementById("fiesta1");
  
  let playa1 = document.getElementById("playa1");
  

  let amarillo1 = document.getElementById("amarillo1");
  
  let rojo1 = document.getElementById("rojo1");
  
  let azul1 = document.getElementById("azul1");
  
  let gris1 = document.getElementById("gris1");
  
  let negro1 = document.getElementById("negro1");
  

  if (felizP.checked == true) {
    if (concierto1.checked == true) {
      if (amarillo1.checked == true) {
        let data = Promise.resolve(getISS())
       
        inf = document.createElement('div')
        inf.className="moc"
        inf.id= "moc"
        inf.innerHTML=`<p>NOMBRE:${data}</p> `
        console.log(data)
      document.getElementById("per").appendChild(inf) 
        //document.getElementById("p1").innerHTML = "feliz"
        console.log("feliz")
      }if (rojo1.checked == true) {
        console.log("triste")
      }if (azul1.checked == true) {
        console.log("enojado")
      }if (gris1.checked == true) {
        console.log("asustado")
      }if (negro1.checked == true) {
        console.log("aburrido")
      }
    }if (cama1.checked == true) {
      if (amarillo1.checked == true) {
        console.log("feliz")
      }if (rojo1.checked == true) {
        console.log("triste")
      }if (azul1.checked == true) {
        console.log("enojado")
      }if (gris1.checked == true) {
        console.log("asustado")
      }if (negro1.checked == true) {
        console.log("aburrido")
      }
    }if (ejercicio1.checked == true) {
      if (amarillo1.checked == true) {
        console.log("feliz")
      }if (rojo1.checked == true) {
        console.log("triste")
      }if (azul1.checked == true) {
        console.log("enojado")
      }if (gris1.checked == true) {
        console.log("asustado")
      }if (negro1.checked == true) {
        console.log("aburrido")
      }
    }if (fiesta1.checked == true) {
      if (amarillo1.checked == true) {
        console.log("feliz")
      }if (rojo1.checked == true) {
        console.log("triste")
      }if (azul1.checked == true) {
        console.log("enojado")
      }if (gris1.checked == true) {
        console.log("asustado")
      }if (negro1.checked == true) {
        console.log("aburrido")
      }
    }if (playa1.checked == true) {
      if (amarillo1.checked == true) {
        console.log("feliz")
      }if (rojo1.checked == true) {
        console.log("triste")
      }if (azul1.checked == true) {
        console.log("enojado")
      }if (gris1.checked == true) {
        console.log("asustado")
      }if (negro1.checked == true) {
        console.log("aburrido")
      }
    }}if (triste1.checked == true) {//2
      if (concierto1.checked == true) {
        if (amarillo1.checked == true) {
          console.log("feliz")
        }if (rojo1.checked == true) {
          console.log("triste")
        }if (azul1.checked == true) {
          console.log("enojado")
        }if (gris1.checked == true) {
          console.log("asustado")
        }if (negro1.checked == true) {
          console.log("aburrido")
        }
      }if (cama1.checked == true) {
        if (amarillo1.checked == true) {
          console.log("feliz")
        }if (rojo1.checked == true) {
          console.log("triste")
        }if (azul1.checked == true) {
          console.log("enojado")
        }if (gris1.checked == true) {
          console.log("asustado")
        }if (negro1.checked == true) {
          console.log("aburrido")
        }
      }if (ejercicio1.checked == true) {
        if (amarillo1.checked == true) {
          console.log("feliz")
        }if (rojo1.checked == true) {
          console.log("triste")
        }if (azul1.checked == true) {
          console.log("enojado")
        }if (gris1.checked == true) {
          console.log("asustado")
        }if (negro1.checked == true) {
          console.log("aburrido")
        }
      }if (fiesta1.checked == true) {
        if (amarillo1.checked == true) {
          console.log("feliz")
        }if (rojo1.checked == true) {
          console.log("triste")
        }if (azul1.checked == true) {
          console.log("enojado")
        }if (gris1.checked == true) {
          console.log("asustado")
        }if (negro1.checked == true) {
          console.log("aburrido")
        }
      }if (playa1.checked == true) {
        if (amarillo1.checked == true) {
          console.log("feliz")
        }if (rojo1.checked == true) {
          console.log("triste")
        }if (azul1.checked == true) {
          console.log("enojado")
        }if (gris1.checked == true) {
          console.log("asustado")
        }if (negro1.checked == true) {
          console.log("aburrido")
        }
      }}if (enojado1.checked == true) {//3
        if (concierto1.checked == true) {
          if (amarillo1.checked == true) {
            console.log("feliz")
          }if (rojo1.checked == true) {
            console.log("triste")
          }if (azul1.checked == true) {
            console.log("enojado")
          }if (gris1.checked == true) {
            console.log("asustado")
          }if (negro1.checked == true) {
            console.log("aburrido")
          }
        }if (cama1.checked == true) {
          if (amarillo1.checked == true) {
            console.log("feliz")
          }if (rojo1.checked == true) {
            console.log("triste")
          }if (azul1.checked == true) {
            console.log("enojado")
          }if (gris1.checked == true) {
            console.log("asustado")
          }if (negro1.checked == true) {
            console.log("aburrido")
          }
        }if (ejercicio1.checked == true) {
          if (amarillo1.checked == true) {
            console.log("feliz")
          }if (rojo1.checked == true) {
            console.log("triste")
          }if (azul1.checked == true) {
            console.log("enojado")
          }if (gris1.checked == true) {
            console.log("asustado")
          }if (negro1.checked == true) {
            console.log("aburrido")
          }
        }if (fiesta1.checked == true) {
          if (amarillo1.checked == true) {
            console.log("feliz")
          }if (rojo1.checked == true) {
            console.log("triste")
          }if (azul1.checked == true) {
            console.log("enojado")
          }if (gris1.checked == true) {
            console.log("asustado")
          }if (negro1.checked == true) {
            console.log("aburrido")
          }
        }if (playa1.checked == true) {
          if (amarillo1.checked == true) {
            console.log("feliz")
          }if (rojo1.checked == true) {
            console.log("triste")
          }if (azul1.checked == true) {
            console.log("enojado")
          }if (gris1.checked == true) {
            console.log("asustado")
          }if (negro1.checked == true) {
            console.log("aburrido")
          }
        }}if (asustado1.checked == true) {//4
          if (concierto1.checked == true) {
            if (amarillo1.checked == true) {
              console.log("feliz")
            }if (rojo1.checked == true) {
              console.log("triste")
            }if (azul1.checked == true) {
              console.log("enojado")
            }if (gris1.checked == true) {
              console.log("asustado")
            }if (negro1.checked == true) {
              console.log("aburrido")
            }
          }if (cama1.checked == true) {
            if (amarillo1.checked == true) {
              console.log("feliz")
            }if (rojo1.checked == true) {
              console.log("triste")
            }if (azul1.checked == true) {
              console.log("enojado")
            }if (gris1.checked == true) {
              console.log("asustado")
            }if (negro1.checked == true) {
              console.log("aburrido")
            }
          }if (ejercicio1.checked == true) {
            if (amarillo1.checked == true) {
              console.log("feliz")
            }if (rojo1.checked == true) {
              console.log("triste")
            }if (azul1.checked == true) {
              console.log("enojado")
            }if (gris1.checked == true) {
              console.log("asustado")
            }if (negro1.checked == true) {
              console.log("aburrido")
            }
          }if (fiesta1.checked == true) {
            if (amarillo1.checked == true) {
              console.log("feliz")
            }if (rojo1.checked == true) {
              console.log("triste")
            }if (azul1.checked == true) {
              console.log("enojado")
            }if (gris1.checked == true) {
              console.log("asustado")
            }if (negro1.checked == true) {
              console.log("aburrido")
            }
          }if (playa1.checked == true) {
            if (amarillo1.checked == true) {
              console.log("feliz")
            }if (rojo1.checked == true) {
              console.log("triste")
            }if (azul1.checked == true) {
              console.log("enojado")
            }if (gris1.checked == true) {
              console.log("asustado")
            }if (negro1.checked == true) {
              console.log("aburrido")
            }
          }}if (aburrido1.checked == true) {//5
            if (concierto1.checked == true) {
              if (amarillo1.checked == true) {
                console.log("feliz")
              }if (rojo1.checked == true) {
                console.log("triste")
              }if (azul1.checked == true) {
                console.log("enojado")
              }if (gris1.checked == true) {
                console.log("asustado")
              }if (negro1.checked == true) {
                console.log("aburrido")
              }
            }if (cama1.checked == true) {
              if (amarillo1.checked == true) {
                console.log("feliz")
              }if (rojo1.checked == true) {
                console.log("triste")
              }if (azul1.checked == true) {
                console.log("enojado")
              }if (gris1.checked == true) {
                console.log("asustado")
              }if (negro1.checked == true) {
                console.log("aburrido")
              }
            }if (ejercicio1.checked == true) {
              if (amarillo1.checked == true) {
                console.log("feliz")
              }if (rojo1.checked == true) {
                console.log("triste")
              }if (azul1.checked == true) {
                console.log("enojado")
              }if (gris1.checked == true) {
                console.log("asustado")
              }if (negro1.checked == true) {
                console.log("aburrido")
              }
            }if (fiesta1.checked == true) {
              if (amarillo1.checked == true) {
                console.log("feliz")
              }if (rojo1.checked == true) {
                console.log("triste")
              }if (azul1.checked == true) {
                console.log("enojado")
              }if (gris1.checked == true) {
                console.log("asustado")
              }if (negro1.checked == true) {
                console.log("aburrido")
              }
            }if (playa1.checked == true) {
              if (amarillo1.checked == true) {
                console.log("feliz")
              }if (rojo1.checked == true) {
                console.log("triste")
              }if (azul1.checked == true) {
                console.log("enojado")
              }if (gris1.checked == true) {
                console.log("asustado")
              }if (negro1.checked == true) {
                console.log("aburrido")
              }
            }}}
      
    /*
  
            let inf=""
            inf = document.createElement('div')
            inf.className="per"
            inf.id= "per"
            inf.innerHTML=`<h1 id="PERSONAJES"></h1>
                          <div id="aver">
                            <div class="flip-card">
                              <p></p>
                              <div class="flip-card-inner">
                                <div class="flip-card-front" id="flip-card-front"  alt="Avatar" >
                                  <img src="${getISS.data.Poster}" class="w3-circle" alt="Norway">
                                </div>
                                <div class="flip-card-back" id="flip-card-back" alt="Avatar">
                                  <p>NOMBRE:${getISS.data.Title}</p>
                                </div>
                              </div>
                            </div>
                          </div> `
          document.getElementById("moc").appendChild(inf) */