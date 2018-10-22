import { SMSConfig, FreeAccount } from "./SMSConfig";
import { Log } from "./LogUtil";

export abstract class SMSAlert {

    static accounts: Array<FreeAccount> = null;

    /**
     * Initialization of SMSAlert class
     * 
     * Initialization of Free sms account in order to use API
     */
    static init (){
        let config: SMSConfig = require("./../smsconfig.json");
        SMSAlert.accounts = config.freeaccounts;
    }

    /**
     * Send SMS message to all account specified in smsconfiguration
     * @param msg
     */
    static sendSMSAlert(msg: string) {
        if (SMSAlert.accounts == null) SMSAlert.init(); //check SMSAlert has been initialized
        var sms = require('free-mobile-sms-api');

        //configuration
        sms.on('sms:error', function (e) {
            Log.info(e.code + ": " + e.msg);
        });

        sms.on('sms:success', function (data) {
            Log.info("SMS sent !");
        });

        //for each free account
        if (SMSAlert.accounts.length > 0) {
            SMSAlert.accounts.forEach((account: FreeAccount) => {
                sms.account(account.id, account.key);
                sms.send(encodeURI(msg));
            });
        } else {
            Log.info("You didnt configured your free account into the smsconfig.json file. We can't send SMS.")
        }

    }
}