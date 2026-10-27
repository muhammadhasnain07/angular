import { Service } from '@angular/core';
import { Student } from '../model/student';

@Service()
export class StudentService {

    private students : Student[]=[

        {
            id:101,
            Student_name  : "Hasnain",
            Student_subject : "Angular" 

        }


    ]
}

