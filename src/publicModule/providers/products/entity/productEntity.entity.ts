import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('products')
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  sku: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  @Column()
  model: string;

  @Column()
  category: string;

  @Column()
  color: string;

  @Column('decimal')
  price: number;

  @Column()
  currency: string;

  @Column()
  stock: number;

  @Column({ type: 'timestamp', nullable: true })
  createdAt?: Date;

  @Column({ type: 'timestamp', nullable: true })
  updatedAt?: Date;

  @Column({ nullable: true })
  locale?: string;
}