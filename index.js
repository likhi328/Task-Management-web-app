const taskcontainer = document.querySelector(".task__container")



const addnewCard = () => {              //funtion
    //get task data
    const taskData = {                  //object
        id: `${Date.now()}`,
        title:document.getElementById("TaskTitle").value,
        image:document.getElementById("imageURL").value,
        description:document.getElementById("taskDescription").value,
        

    };
    // generate html code 
    const newCard = `
    <div id=${taskData.id} class="col-md-6 col-lg-4 my-4">
        <div class="card">
            <div class="card-header gap=2 d-flex justify-content-end gap-2">
              <button class="btn btn-outline-info">
                <i class="fal fa-pencil"></i>
              </button>
              <button class="btn btn-outline-danger">
                <i class="fal fa-trash"></i>
              </button>
            </div>
            <div class="card-body">
                <div class="card-img">
                    <img src=${taskData.image}
                    alt="image"
                    class="card-img"
                    />
                </div>
           
              <h5 class="card-title mt-4 ">${taskData.title}</h5>
              <p class="card-text">${taskData.description}</p>
              <span class="badge bg-primary">New</span>
            </div>
            <div class="card-footer text-muted">
              <button class="btn btn-outline-primary">
                Open Task
              </button>
            </div>
        </div>
    </div>`
    //inject it to dom

    taskcontainer.insertAdjacentHTML("beforeend", newCard);
    //cleat the form
    document.getElementById("TaskTitle").value="";
    document.getElementById("imageURL").value= "";
    document.getElementById("taskDescription").value="";
    return;
};

const loadExistingtask =() => {
    //check local storage

    //reetrive data

    //generate html code for Data

    //inject into dom
};
