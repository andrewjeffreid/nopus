import '../Dropdown.css'

export default function ImportTrades() {

    const importTrades = async (data) => {

        const url = "http://localhost:8080/trades/import";
        try {
            await fetch(url, {
                method: "POST",
                headers: {'Content-Type': 'application/json'}, 
                body: JSON.stringify(data)
            })
        } catch (TypeError) {
            console.log("The server is not running.")
        }
    }

    // creates array of objects
    function csvToArray(str) {

        let arr = str.split('\n'); 

        var jsonObj = [];
        var headers = arr[0].split(',');
        for(var i = 1; i < arr.length; i++) {
            var data = arr[i].split(',');
            var obj = {};
            for(var j = 0; j < data.length; j++) {
                obj[headers[j].trim().replaceAll("\"", "")] = data[j].trim().replaceAll("\"", "");
            }
            jsonObj.push(obj);
        }

        return jsonObj;
    }

    const handleSubmit = (file) => {

        const reader = new FileReader()

        reader.addEventListener("load", () => {

            // this will then display a text file
            const str = reader.result
            const jsonObj = csvToArray(str)

            importTrades(jsonObj)
            
          }, false);
        
        if (file) {
            reader.readAsText(file)
        }

    }

    return (
        <div id="dropdown">
            <div>
                <p>Click on the "Choose File" button to upload a file:</p>
            </div>
            <div>
            <form onSubmit={e => {handleSubmit(e.target.myFile.files[0])}}>
                <input type="file" id="myFile" name="filename" accept=".csv" required/>
                <input type="submit"/>
            </form>
            </div>
        </div>
    )
}