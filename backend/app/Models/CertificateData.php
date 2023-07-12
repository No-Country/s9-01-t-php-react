<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model;

class CertificateData extends Model
{
    use HasFactory;

    protected $connection = 'mongodb';
    protected $collection = 'certificates_data';

    protected $fillable = [
        'career_type'.
        'authority1',
        'authority2',
        'certificateConten'
    ];

    protected $casts = [
        'authority1' => 'string',
        'authority2' => 'string',
        'career_type' => 'string',
        'certificateConten' => 'string',
    ];
}
