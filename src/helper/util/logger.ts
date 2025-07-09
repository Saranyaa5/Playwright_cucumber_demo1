import { info, time } from 'console';
import {transports,format} from 'winston';

export function options(screnarioName: string){
    return{
        transports:[
            new transports.File({
                filename:`test-results/logs/${screnarioName}.log`,
                level:'info',
                format:format.combine(
                    format.timestamp({ format:'MMM DD YYYY HH:mm:ss' }),
                    format.align(),
                    format.printf(info => `${info.level}: ${[info.timestamp]}: ${info.message}`)

                )
            }),
        ]
    }
};