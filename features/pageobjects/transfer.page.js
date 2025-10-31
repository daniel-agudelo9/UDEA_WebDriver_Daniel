import Page from './page.js';

class TransferPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputAmount () {
        return $("//input[@id='amount']");
    }

    get inputFromAccount () {
        return $("//select[@id='fromAccountId']");
    }

    get inputToAccount () {
        return $("//select[@id='toAccountId']");
    }

    get btnTransfer () {
        return $("//input[@value='Transfer']");
    }

    async transfer (amount, fromAccount, toAccount) {
        await this.inputAmount.setValue(amount);
        await this.inputFromAccount.selectByAttribute('value', fromAccount);
        await this.inputToAccount.selectByAttribute('value', toAccount);  
        await this.btnTransfer.click();
    }

  open() {
    return super.open('transfer');
  }
}

export default new TransferPage();
