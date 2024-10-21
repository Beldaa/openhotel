import { container, ContainerComponent, textSprite } from "@tu/tulip";
import { SpriteSheetEnum } from "shared/enums";

export const publicRoomsComponent: ContainerComponent = (props) => {
  const $container = container(props);

  const $text = textSprite({
    text: `PUBLIC`,
    spriteSheet: SpriteSheetEnum.DEFAULT_FONT,
    color: 0,
    position: {
      x: 0,
      y: 0,
    },
  });
  $container.add($text);

  return $container.getComponent(publicRoomsComponent);
};