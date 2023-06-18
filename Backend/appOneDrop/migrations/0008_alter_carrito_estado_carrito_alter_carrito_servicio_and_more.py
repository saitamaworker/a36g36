# Generated by Django 4.2.1 on 2023-06-18 11:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('appOneDrop', '0007_alter_prestador_usuario'),
    ]

    operations = [
        migrations.AlterField(
            model_name='carrito',
            name='estado_carrito',
            field=models.CharField(choices=[('vacio', 'Vacio'), ('comprado', 'Comprado'), ('pago pendiente', 'Pago pendiente'), ('eliminado', 'Eliminado')], max_length=30),
        ),
        migrations.AlterField(
            model_name='carrito',
            name='servicio',
            field=models.ManyToManyField(to='appOneDrop.servicio'),
        ),
        migrations.AlterField(
            model_name='ficha_medica',
            name='terapia_insulina',
            field=models.CharField(choices=[('Dosis Basal', 'Dosis Basal'), ('Dosis en Bolo', 'Dosis en Bolo'), ('No Uso/Otros', 'No Uso/Otros')], max_length=30),
        ),
        migrations.AlterField(
            model_name='ficha_medica',
            name='terapia_pastillas',
            field=models.CharField(choices=[('Tolbutamida', 'Tolbutamida'), ('Glimepirida', 'Glimepirida'), ('Glipizida', 'Glipizida')], max_length=30),
        ),
        migrations.AlterField(
            model_name='ficha_medica',
            name='tipo_diabetes',
            field=models.CharField(choices=[('Tipo 1', 'Tipo 1'), ('Tipo 2', 'Tipo 2'), ('Gestacional', 'Gestacional'), ('Monogenica', 'Monogenica'), ('Otros', 'Otros')], max_length=35),
        ),
        migrations.AlterField(
            model_name='ficha_medica',
            name='tipo_glucometro',
            field=models.CharField(choices=[('Medidor Capilar', 'Medidor Capilar'), ('Medidor Continuo (MCG)', 'Medidor Continuo (MCG)'), ('Medidor Tipo Flash', 'Medidor Tipo Flash'), ('No uso/Otro', 'No uso/Otro')], max_length=30),
        ),
        migrations.AlterField(
            model_name='ficha_medica',
            name='tipo_sensor',
            field=models.CharField(choices=[('FreeStyle Libre de Abbott', 'FreeStyle Libre de Abbott'), ('Guardian Connect de Medtronic', 'Guardian Connect de Medtronic'), ('No uso', 'No uso')], max_length=30),
        ),
        migrations.DeleteModel(
            name='Paquete',
        ),
    ]
