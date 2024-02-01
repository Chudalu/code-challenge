import { Column, CreatedAt, DataType, Model, PrimaryKey, Table, UpdatedAt } from "sequelize-typescript";
import { CuisineEnum } from "src/app/models/enum/cuisine.enum";
import { GenericStatus } from "src/app/models/enum/generic-status.enum";
import { PriceRangeEnum } from "src/app/models/enum/price-range.enum";
import { RatingEnum } from "src/app/models/enum/rating.enum";

@Table({
    freezeTableName: true
})
export class Restaurant extends Model {

    @PrimaryKey
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4
    })
    id: string;

    @Column(DataType.STRING)
    name: string;

    @Column(DataType.TEXT)
    address: string;

    @Column(DataType.DOUBLE)
    longitude: number;

    @Column(DataType.DOUBLE)
    latitude: number;

    @Column(DataType.STRING)
    cuisineType: CuisineEnum

    @Column(DataType.STRING)
    priceRange: PriceRangeEnum

    @Column(DataType.STRING)
    ratings: RatingEnum

    @Column({
        type: DataType.STRING,
        defaultValue: GenericStatus.ACTIVE
    })
    status: GenericStatus

    @UpdatedAt
    @Column(DataType.DATE)
    updatedAt: Date;

    @CreatedAt
    @Column(DataType.DATE)
    createdAt: Date;
}
