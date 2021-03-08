import { IAcceptorController } from "../../controllers/IAcceptorController";
import { Command } from "../../utils/Command";

export abstract class CheckersCommand<T extends IAcceptorController> extends Command {
  constructor(title: string, protected acceptorController: T) {
    super(title);
  }
}
