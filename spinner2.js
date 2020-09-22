

  let spin = ["|", "/", "-", "\\", "|", "/", "-", "\\", "\n"]
  let increment = 200
  for (let char of spin) {
      setTimeout(() => {
        process.stdout.write(`\r${char} `)
      }, increment)
        increment += 200;
      
    
    }

