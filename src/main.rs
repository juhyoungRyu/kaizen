use std::io;
use std::cmp::Ordering;
use rand::Rng;

fn main() {
    print!("Guess the numer!\n");

    let secret_number = rand::thread_rng().gen_range(1, 101);

    loop {
        print!("Please input your guess.\n");
    
        let mut guess = String::new();
    
        io::stdin()
            .read_line(&mut guess)
            .expect("Fail to read line");
    
        let guess: u32 = guess.trim().parse().expect("Please type a number!");
    
        print!("You guessd : {}\n", guess);
    
        match guess.cmp(&secret_number) {
            Ordering::Less => print!("Too small\n!"),
            Ordering::Greater => print!("Too big\n!"),
            Ordering::Equal => {
                print!("You win!");
                break;
            },
        }
        
    }


}
