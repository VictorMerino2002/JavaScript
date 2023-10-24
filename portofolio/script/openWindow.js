class Ventana {
    constructor(name,windowWidth,windowHeight,windowIcon,content){
        this.name = name;
        this.windowWidth = windowWidth;
        this.windowHeight = windowHeight;
        this.windowIcon = windowIcon;
        this.content = content;
        this.random = Math.trunc(Math.random()*99999999);
        //Crear Icono del escritorio
        const desktopIcon = document.createElement("button");
        desktopIcon.setAttribute("id",`desktop-icon-${this.random}`);
        desktopIcon.className = "desktop-icon";
        desktopIcon.innerHTML = `<img src="${this.windowIcon}" alt="${this.random}"><div>${this.name}</div>`;

        const desktop = document.getElementById("desktop");
        desktop.appendChild(desktopIcon);
        //Crear ventana
        const windowElement = document.createElement("div");
        windowElement.setAttribute("id",this.name);
        windowElement.setAttribute("class","window");
        //Definir dimensiones a la ventana
        windowElement.style.width = `${windowWidth}px`;
        windowElement.style.height = `${windowHeight}px`;
        //Añadir botones
        windowElement.innerHTML = `
        <nav>
        <div class="window-title">
            <img src="${this.windowIcon}" alt="">
            ${this.name}
        </div>
        <div>
            <button class="window-btn btn" id="minimize-${this.random}" style="background-image:url(img/window-btn/minimize.png);"></button>
            <button class="window-btn btn" id="maximize-${this.random}" style="background-image:url(img/window-btn/maximize.png);"></button>
            <button class="window-btn btn" id="close-${this.random}" style="background-image:url(img/window-btn/close.png);"></button>
        </div>
        </nav>`;
        //Añadir contenido
        windowElement.innerHTML = windowElement.innerHTML + this.content;
        document.body.appendChild(windowElement);
        //Añadir elemento a la barra de tareas
        const taskElement = document.createElement("button");
        taskElement.setAttribute("id",`task-${this.random}`);
        taskElement.className = "btn taskbar-btn";
        taskElement.innerHTML = `<img src="${this.windowIcon}" alt="${name}">${name}`
        const taskbar = document.getElementById("taskbar");
        taskbar.appendChild(taskElement);

//-------Añadir funionalidad a los botones de la ventana--------------------------------------------------------------------------------
        //Boton de minimizar ventana
        const btnMinimize = document.getElementById(`minimize-${this.random}`);
        btnMinimize.addEventListener("click",()=>{
            windowElement.style.display = "none";
            taskElement.style.display = "flex";
        });
        //Boton de maximizar ventana
        const btnMaximize = document.getElementById(`maximize-${this.random}`);
        btnMaximize.addEventListener("click",()=>{
            if(windowElement.style.width == `${this.windowWidth}px`){
                console.log(windowElement.style.width);
                windowElement.style.top = "0";
                windowElement.style.left = "0";
                windowElement.style.width = "98.5%";
                windowElement.style.height = "94%";
            }else{
                windowElement.style.top = "3%";
                windowElement.style.left = "10%";
                windowElement.style.width = `${this.windowWidth}px`;
                windowElement.style.height = `${this.windowHeight}px`;
            }
        });
        //Boton de cerrar ventana
        const btnClose = document.getElementById(`close-${this.random}`);
        btnClose.addEventListener("click",()=>{
            windowElement.style.display = "none";
            taskElement.style.display = "none";
        });
        //Añadir funcionalidad al boton del icono del escritorio
        desktopIcon.addEventListener("dblclick",()=>{
            windowElement.style.display = "flex";
            taskElement.style.display = "flex";
        });
        //Añadir funcionalidad al boton de la barra de tareas
        taskElement.addEventListener("click",()=>{
            windowElement.style.display = (windowElement.style.display == "flex")?"none" :"flex";
        });
    }
}