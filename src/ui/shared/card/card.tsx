import Image from "next/image";
import Button from "../button/button";

type CardProps = {
  readonly src?: string;
  readonly className: string;
  readonly title?: string;
  readonly description?: string;
  readonly buttonTittle?: string;
  readonly action?: () => void;
};

const Card = (props: CardProps) => {
  const { src, title, description, action, buttonTittle, className } = props;
  return (
    <div className={`max-w-sm rounded overflow-hidden shadow-lg ${className}`}>
      {src && (
        <div className="flex justify-center">
          <Image src={src} alt="default alt" width={100} height={100} />
        </div>
      )}
      <div className="px-6 py-4">
        {title && <div className="font-bold text-xl mb-2">{title} </div>}
        {description && (
          <p className="text-gray-700 text-base">{description}</p>
        )}
      </div>
      {action && (
        <div className="text-center p-6">
          <Button onClick={action}>{buttonTittle}</Button>
        </div>
      )}
    </div>
  );
};

export default Card;
