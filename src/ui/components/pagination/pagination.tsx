import Button from "@/ui/shared/button/button";
import { toASCII } from "punycode";

type PaginationProps = {
  readonly currentPage: number;
  readonly total: number;
  readonly size: number;
  readonly goToPage: (page: number) => void;
};
const Pagination = (props: PaginationProps) => {
  const { currentPage, total, goToPage, size } = props;
  return (
    <div className="flex flex-row gap-3 shadow-md   justify-between">
      <div className="flex flex-row gap-3 items-center p-3">
        <Button
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 0}
        >
          {"<="}
        </Button>

        <div>Pagina actual: {currentPage}</div>

        <Button
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage >= Math.floor(total / size)}
        >
          {"=>"}
        </Button>

        <div>de {total}</div>
      </div>
      <div className="flex items-center p-3">
        <div className="right">Items por pagina: {size}</div>
      </div>
    </div>
  );
};

export default Pagination;
