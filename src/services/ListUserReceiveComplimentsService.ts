import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";


class ListUserReceiveComplimentsService {
  async execute(user_id: string) {
    const complimentsRepositories = getCustomRepository(ComplimentsRepositories);

    const compliments = complimentsRepositories.find({
      where: {
        user_receiver: user_id
      },
      relations: ["userSender", "UserReceiver", "tag"]
    });

    return compliments;
  }
}

export { ListUserReceiveComplimentsService }